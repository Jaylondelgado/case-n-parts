import React, { useState, useEffect } from "react";

function MyBuilds(props) {
  const [builds, setBuild] = useState([]);

  useEffect(() => {
    const getBuildData = async () => {
      const buildResponse = await fetch(
        `${process.env.REACT_APP_ACCOUNTS_HOST}/api/builds/mine`,
        {
          credentials: "include",
        }
      );
      const buildData = await buildResponse.json();
      setBuild(buildData.builds);
    };

    getBuildData();
  }, []);

  return (
    <div className="container justify-content-center pt-5 my-5">
      {builds.length > 0 && (
        <div className="row">
          {builds.map((build) => {
            return (
              <div key={build.id} className="col-sm m-3">
                <div className="card h-100 border-light bg-transparent">
                  <img
                    src={build.picture}
                    className="card-img-top p-3"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-info">{build.name}</h5>
                    <p className="card-text text-primary">
                      {build.gpu.chipset}
                    </p>
                    <a href="#" className="btn btn-outline-primary">
                      Build Detail
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {builds.length === 0 && <h2>No builds available</h2>}
    </div>
  );
}
export default MyBuilds;

// class MyBuilds extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       builds: [],
//       redirect: false,
//   };
//   }
//   async getMyBuilds() {
//     const url = `${process.env.REACT_APP_API_HOST}/api/builds/mine`;
//     const response = await fetch(url, {
//       credentials:'include',
//     });
//     if (response.ok) {
//       this.setState({
//         builds: await response.json(),
//       });
//       console.log(this.state.builds)
//     }else if (response.status === 401) {
//       this.setState({redirect: true})
//     }
//   }

//   componentDidMount() {
//     this.getMyBuilds();
//   }
//     render() {
//       console.log(this.state)
//       if(this.state.redirect === true) {
//         return <Navigate to ='/login' />;
//       }
//       return (
//         <>
//   <div className="container">
//     <div className="row">
//           <div className="col-lg-6 mb-4">
//             <div className="card" style={{width: "18rem"}} >
//               <img src={this.state.builds.picture} className="card-img-top" alt="..." height={"100rem"}/>
//               <div className="card-body">
//                 <h5 className="card-title">{this.state.builds.Name}</h5>
//                 <p className="card-text">{this.state.builds.gpu}</p>
//                 <a href="#" className="btn btn-primary">Build Detail</a>
//               </div>
//             </div>
//           </div>
//     </div>
//     </div>
//         </>
//       );
//     }
// }
// export default MyBuilds;

// class MyBuilds extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: null,
//     };
//   }

//   async getMyDetails() {
//     const url = `${process.env.REACT_APP_API_HOST}/users/me`;
//     const response = await fetch(url, {
//       credentials: 'include',
//     });
//     if (response.ok) {
//       this.setState({
//         user: await response.json(),
//       });
//     }
//   }

//   componentDidMount() {
//     this.getMyDetails();
//   }

//   render() {
//     return (
//       <div>{this.state.user.username}</div>
//     );
//   }
// }
// export default MyBuilds;
