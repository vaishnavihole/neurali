import React from 'react'
import "./Atlas.css"

function Atlas() {
  return (
    <div className='atlas-container'>
        <h4 className='page-title'>Select Atlas to change</h4>

        <div className='row'>
          <div className='col-md-8'>
            <div className='search-container'>
              🔍 <input type="text"  className="search-box"/>
                  <button className="search-button">Search</button>
            </div>

            <div>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>REPORT</th>
                    <th>USER</th>
                    <th>TYPE</th>
                    <th>LESSON</th>
                    <th>DESCRIPTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <button className='report-button'>View</button>
                    </td>
                    <td>Vaishnavi</td>
                    <td>Blood: CBC</td>
                    <td>Default</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>
                      <button className='report-button'>View</button>
                    </td>
                    <td>Vaishnavi</td>
                    <td>Canine Blood: CBC</td>
                    <td>Default</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>
                      <button className='report-button'>View</button>
                    </td>
                    <td>Vaishnavi</td>
                    <td>Feline Blood: CBC</td>
                    <td>Default</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>
                      <button className='report-button'>View</button>
                    </td>
                    <td>Vaishnavi</td>
                    <td>Malaria thin: parasites counting</td>
                    <td>Default</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>
                      <button className='report-button'>View</button>
                    </td>
                    <td>Vaishnavi</td>
                    <td>Malaria thick: parasites counting</td>
                    <td>Default</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='filter-container'>
              <h2 className='filter-title'>FILTER</h2>
              <p className='filter-menu'>All</p>
              <p className='filter-menu'>Blood: CBC</p>
              <p className='filter-menu'>Bone marrow: WBC-differential</p>
              <p className='filter-menu'>Malaria thin: parasites detection</p>
              <p className='filter-menu'>Malaria thin: parasites counting</p>
              <p className='filter-menu'>Malaria thick: parasites counting</p>
              <p className='filter-menu'>Blood: PLT counting (Fonio)</p>
              <p className='filter-menu'>Slide Scan</p>
              <p className='filter-menu'>Canine Blood: CBC</p>
              <p className='filter-menu'>Feline Blood: CBC</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Atlas
