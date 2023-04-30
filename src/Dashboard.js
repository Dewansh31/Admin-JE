import React from 'react'
import "./Sidebar.css"

function Dashboard() {
  return (
    <div>
    <div className="main-content">
       <main>
      <div className="page-header">
        <h1>Dashboard</h1>
        <small>Home / Dashboard</small>
      </div>
      <div className="page-content">
        <div className="analytics">
          <div className="card">
            <div className="card-head">
              <h2>107,200</h2>
              <span className="las la-user-friends" />
            </div>
            <div className="card-progress">
              <small>Total Member</small>
              <div className="card-indicator">
                <div className="indicator one" style={{width: '60%'}} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h2>340,230</h2>
              <span className="las la-eye" />
            </div>
            <div className="card-progress">
              <small>Premium Member</small>
              <div className="card-indicator">
                <div className="indicator two" style={{width: '80%'}} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h2>$653,200</h2>
              <span className="las la-shopping-cart" />
            </div>
            <div className="card-progress">
              <small>Free Member</small>
              <div className="card-indicator">
                <div className="indicator three" style={{width: '65%'}} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h2>47,500</h2>
              <span className="las la-envelope" />
            </div>
            <div className="card-progress">
              <small>Blocked Member</small>
              <div className="card-indicator">
                <div className="indicator four" style={{width: '90%'}} />
              </div>
            </div>
          </div>
        </div>
        <div className="records table-responsive">
          <div className="record-header">
            <div className="add">
              <span>Entries</span>
              <select name id>
                <option value>ID</option>
              </select>
              <button>Add record</button>
            </div>
            <div className="browse">
              <input type="search" placeholder="Search" className="record-search" />
              <select name id>
                <option value>Status</option>
              </select>
            </div>
          </div>
          <div>
            <table width="100%">
              <thead>
                <tr>
                  <th>#</th>
                  <th><span className="las la-sort" /> CLIENT</th>
                  <th><span className="las la-sort" /> TOTAL</th>
                  <th><span className="las la-sort" /> ISSUED DATE</th>
                  <th><span className="las la-sort" /> BALANCE</th>
                  <th><span className="las la-sort" /> ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/3.jpeg)'}} />
                      <div className="client-info">
                        <h4>Andrew Bruno</h4>
                        <small>bruno@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $3171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    -$205
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/1.jpeg)'}} />
                      <div className="client-info">
                        <h4>Exty Bruno</h4>
                        <small>exty@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $3171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    -$205
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/1.jpeg)'}} />
                      <div className="client-info">
                        <h4>Exty Bruno</h4>
                        <small>exty@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $2171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    <span className="paid">Paid</span>
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/3.jpeg)'}} />
                      <div className="client-info">
                        <h4>Andrew Bruno</h4>
                        <small>bruno@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $3171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    -$205
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/1.jpeg)'}} />
                      <div className="client-info">
                        <h4>Exty Bruno</h4>
                        <small>exty@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $3171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    <span className="paid">Paid</span>
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/1.jpeg)'}} />
                      <div className="client-info">
                        <h4>Exty Bruno</h4>
                        <small>exty@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $2171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    <span className="paid">Paid</span>
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/3.jpeg)'}} />
                      <div className="client-info">
                        <h4>Andrew Bruno</h4>
                        <small>bruno@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $3171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    -$205
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/1.jpeg)'}} />
                      <div className="client-info">
                        <h4>Exty Bruno</h4>
                        <small>exty@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $3171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    -$205
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/1.jpeg)'}} />
                      <div className="client-info">
                        <h4>Exty Bruno</h4>
                        <small>exty@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $2171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    <span className="paid">Paid</span>
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
    </div>
    </div>
  )
}

export default Dashboard
