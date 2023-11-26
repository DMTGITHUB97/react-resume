import './App.css';
import { React } from 'react';
import data from './components/data'

function App() {
  return (
    <>
      <div className='border border-5 col-10 my-2 m-0 p-0'>
        {data.map((data) => {
          for (let i = 0; i < data.edudation.length; i++) {
            console.log(data.edudation[i])
          }
          for (let i = 0; i < data.personalDetail.length; i++) {
            console.log(data.personalDetail[i])
          }
          for (let i = 0; i < data.organizationalDetail.length; i++) {
            console.log(data.organizationalDetail[i])
          }
          for (let i = 0; i < data.skills.length; i++) {
            console.log(data.skills[i])
          }
          return <div className='col-12 p-0 m-0 my-2 p-10'>
            <p className='row justify-content-center py-3'>CURRICULUM VITAE</p>
            <div className='border-bottom px-2 py-2 border-2'>
              <p className='p-0 m-0 px-2'>{data.personalDetail[0].personalInfo.name}</p>
              <p className='p-0 m-0 px-2'>{data.organizationalDetail[0].designation}</p>
              <a href={"mailto:" + data.personalDetail[0].personalInfo.email} className='p-0 m-0 px-2'>{data.personalDetail[0].personalInfo.email}</a>
              <p className='p-0 m-0 px-2'>{data.personalDetail[0].personalInfo.phNo}</p>
            </div>
            <div className='px-2 py-3'>
              <h6 className='p-0 m-0 px-2 text-decoration-underline'>OBJECTIVE</h6>
              <p className='p-0 m-0 px-2'>{data.objective}</p>
            </div>
            <div className='px-2 py-3'>
              <h6 className='p-0 m-0 px-2 text-decoration-underline'>PROFESIONAL EXPERIENCE – 1 Year and 6 month</h6>
              <p className='px-2'>Software Engineer having 1 Year and 6 month experience in Mobile application Development on Flutter and Web Development.</p>
              <ol className=''>
                <li className='px-2 text-decoration-underline'>{data.organizationalDetail[0].name}</li>
              </ol>
              <p className='px-5'>Presently I am working with LegalCraft Solutions Private Limited as Software Engineer in Hyderabad, Telangana.</p>
              <ul className='mx-5'>
                <li>
                  <div className='col-6 row'>
                    <span className='col-4'>Organization</span>
                    <span className='col-1'>:</span>
                    <span className='col'>{data.organizationalDetail[0].name}</span>
                  </div>
                </li>
                <li>
                  <div className='col-6 row'>
                    <span className='col-4'>Desination</span>
                    <span className='col-1'>:</span>
                    <span className='col'>{data.organizationalDetail[0].designation}</span>
                  </div>
                </li>
                <li>
                  <div className='row col-6'>
                    <span className='col-4'>Work Period</span>
                    <span className='col-1'>:</span>
                    <span className='col'>{data.organizationalDetail[0].duration}</span>
                  </div>
                </li>
                <li>
                  <div className='col-6 row'>
                    <span className='col-4'>Location</span>
                    <span className='col-1'>:</span>
                    <span className='col'>{data.organizationalDetail[0].location}</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className='px-2'>
              <h6 className='p-0 m-0 px-2 text-decoration-underline'>{"Responsibilities".toUpperCase()}</h6>
              <ul>
                <li>
                  Build User Interface(UI) according to the UX Design.
                </li>
                <li>
                  Fetch the data with the UI using APIs to database and debug the code.
                </li>
                <li>
                  Designed and created custom form features including scrolling selectors, bottomsheets and data entries.
                </li>
                <li>
                  Responsible for designing distinctive screen for tablet optimization and cleaner layout.
                </li>
                <li>
                  Tested applications on multiple devices to ensure compatibility standards.
                </li>
                <li>
                  Fixed bugs with code, design patterns and miscellaneous occurrences during projects
                </li>
                <li>
                  Efficiently executes assigned actions
                </li>
                <li>
                  Monitors timeliness of attendance at team meetings
                </li>
              </ul>
            </div>
            <div className='px-2'>
              <h6 className='p-0 m-0 px-2 text-decoration-underline'>EDUCATIONAL QUALIFICATION</h6>
              <ul>
                <li>
                  <p className='p-0 m-0 px-2'>{data.edudation[0].tenth.name}</p>
                  <p className='p-0 m-0 px-2'>{data.edudation[0].tenth.year}</p>
                </li>
                <li>
                  <p className='p-0 m-0 px-2'>{data.edudation[1].higherSecondary.name}</p>
                  <p className='p-0 m-0 px-2'>{data.edudation[1].higherSecondary.year}</p>
                </li>
                <li>
                  <p className='p-0 m-0 px-2'>{data.edudation[2].Graduation.name}</p>
                  <p className='p-0 m-0 px-2'>{data.edudation[2].Graduation.year}</p>
                  <p className='p-0 m-0 px-2'>{data.edudation[2].Graduation.degree}</p>
                  <p className='p-0 m-0 px-2'>{data.edudation[2].Graduation.description}</p>
                </li>
              </ul>
            </div>
            <div className='px-2'>
              <h6 className='p-0 m-0 px-2 text-decoration-underline'>TECHNICAL SKILLS</h6>
              <ul className='mx-5'>
                <li>
                  <div className='col-7 row'>
                    <span className='col-4'>Languages</span>
                    <span className='col-1'>:</span>
                    <span className='col'>{data.skills[0].language}</span>
                  </div>
                </li>
                <li>
                  <div className='col-7 row'>
                    <span className='col-4'>Web Technologies</span>
                    <span className='col-1'>:</span>
                    <span className='col'>{data.skills[1].webTechnologies}</span>
                  </div>
                </li>
                <li>
                  <div className='row col-7'>
                    <span className='col-4'>Database</span>
                    <span className='col-1'>:</span>
                    <span className='col'>{data.skills[2].database}</span>
                  </div>
                </li>
                <li>
                  <div className='col-7 row'>
                    <span className='col-4'>Developer Tool</span>
                    <span className='col-1'>:</span>
                    <span className='col'>{data.skills[3].DeveloperTools}</span>
                  </div>
                </li>
                <li>
                  <div className='col-7 row'>
                    <span className='col-4'>Operating System</span>
                    <span className='col-1'>:</span>
                    <span className='col'>{data.skills[4].operatingSystem}</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className='px-2'>
              <h6 className='p-0 m-0 px-2 text-decoration-underline'>PERSONAL INFORMATION</h6>
              <ul className='mx-5'>
                <li>
                  <div className='col-7 row'>
                    <span className='col-4'>Date of birth</span>
                    <span className='col-1'>:</span>
                    <span className='col'>{data.personalDetail[0].personalInfo.dateOfBirth}</span>
                  </div>
                </li>
                <li>
                  <div className='col-7 row'>
                    <span className='col-4'>Gender</span>
                    <span className='col-1'>:</span>
                    <span className='col'>{data.personalDetail[0].personalInfo.gender}</span>
                  </div>
                </li>
                <li>
                  <div className='row col-7'>
                    <span className='col-4'>Merrital Status</span>
                    <span className='col-1'>:</span>
                    <span className='col'>{data.personalDetail[0].personalInfo.maritalStatus}</span>
                  </div>
                </li>
                <li>
                  <div className='col-7 row'>
                    <span className='col-4'>Age</span>
                    <span className='col-1'>:</span>
                    <span className='col'>{data.personalDetail[0].personalInfo.age}</span>
                  </div>
                </li>
                <li>
                  <div className='col-7 row'>
                    <span className='col-4'>Language Known</span>
                    <span className='col-1'>:</span>
                    <span className='col'>{data.personalDetail[0].personalInfo.knownLanguage}</span>
                  </div>
                </li>
                <li>
                  <div className='col-7 row'>
                    <span className='col-4'>Address</span>
                    <span className='col-1'>:</span>
                    <span className='col'>
                      {data.personalDetail[0].address.street + ", "}
                      {data.personalDetail[0].address.city + ', '}<br></br>
                      {data.personalDetail[0].address.state + ", "}
                      {data.personalDetail[0].address.country + ", "}<br></br>
                      {data.personalDetail[0].address.pin}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className='px-2'>
              <h6 className='p-0 m-0 px-2 text-decoration-underline'>DECLARATION</h6>
              <p>{data.declaration}</p>
            </div>
            <div className='px-2 row py-4'>
              <p className='d-flex justify-content-end position-relative r-85'>Divyamohan Tyagi</p>
            </div>
          </div>
        })}
      </div>
    </>
  );
}

export default App;
