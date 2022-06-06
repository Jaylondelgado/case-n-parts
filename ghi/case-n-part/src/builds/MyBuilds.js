import React from "react";
import { Link } from "react-router-dom";
import { GpuImage } from "../static/cnpStyle";
function BuildColumn(props) {
  return (
    <div className='col'>
      {props.list.map(data => {
        const build = data.build;
        return (
          <div key={build.href} className='card mb-3 shadow'>
            <img
              src={build.location.picture_url}
              className='card-img-top'
              alt='my build'
            />
            <div className='card-body'>
              <h5 className='card-title'>{build.name}</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                {build.location.name}
              </h6>
              <p className='card-text'>{build.description}</p>
            </div>
            <div className='card-footer'>
              {new Date(build.starts).toLocaleDateString()}-
              {new Date(build.ends).toLocaleDateString()}
            </div>
          </div>
        );
      })}
    </div>
  );
}

class MyBuilds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BuildColumns: [[], [], []],
    };
  }

  async componentDidMount() {
    const url = "http://localhost:8000/api/builds/";

    try {
      const response = await fetch(url);
      if (response.ok) {
        // Get the list of builds
        const data = await response.json();

        // Create a list of for all the requests and
        // add all of the requests to it
        const requests = [];
        for (let build of data.builds) {
          const detailUrl = `http://localhost:3000${build.href}`;
          requests.push(fetch(detailUrl));
        }

        // Wait for all of the requests to finish
        // simultaneously
        const responses = await Promise.all(requests);

        // Set up the "columns" to put the build
        // information into
        const BuildColumns = [[], [], []];

        // Loop over the build detail responses and add
        // each to to the proper "column" if the response is
        // ok
        let i = 0;
        for (const buildResponse of responses) {
          if (buildResponse.ok) {
            const details = await buildResponse.json();
            BuildColumns[i].push(details);
            i = i + 1;
            if (i > 2) {
              i = 0;
            }
          } else {
            console.error(buildResponse);
          }
        }

        // Set the state to the new list of three lists of
        // builds
        this.setState({ BuildColumns: BuildColumns });
      }
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <>
        <div className='px-4 py-5 my-5 mt-0 text-center'>
          <img
            className='bg-white rounded shadow d-block mx-auto mb-4'
            src='/logo.svg'
            alt='my builds2'
            width='600'
          />
          <h1 className='display-5 fw-bold'>My Builds</h1>
          <div className='row'>
            <div className='column'>
              <GpuImage />
            </div>
            <div className='column'>
              <GpuImage />
            </div>
            <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
              <Link to='/create' className='btn btn-primary btn-lg px-4 gap-3'>
                Create a Build
              </Link>
            </div>
          </div>
        </div>
        <div className='container'>
          <h1>Favorite Builds</h1>
          <div className='row'>
            <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
              <GpuImage />
              <Link
                to='/toprated'
                className='btn btn-primary btn-lg px-4 gap-3'
              >
                View Builds
              </Link>
            </div>
            {this.state.BuildColumns.map((buildList, index) => {
              return <BuildColumn key={index} list={buildList} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default MyBuilds;
