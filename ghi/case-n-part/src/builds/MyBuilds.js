import React, { useState, useEffect, useContext, cloneElement } from "react";

<<<<<<< HEAD
=======

>>>>>>> bd6e664204c907128bc08706c50ac8dde59a548b
function MyBuilds() {
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
      console.log(buildData);
      setBuild(buildData.builds);
    };

    getBuildData();
  }, []);

  return (
    <div class='container justify-content-center pt-5 my-5'>
      {builds.length > 0 && (
        <div class='row'>
          {builds.map(build => {
            return (
              <div class='col-lg-6 mb-4'>
                <div className='card' style={{ width: "18rem" }} key={build.id}>
                  <img
                    src={build.picture}
                    className='card-img-top'
                    alt='...'
                    height={"100rem"}
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>{build.Name}</h5>
                    <p className='card-text'>{build.gpu.chipset}</p>
                    <a href='#' className='btn btn-primary'>
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
//   <div class="container">
//     <div class="row">
//           <div class="col-lg-6 mb-4">
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
