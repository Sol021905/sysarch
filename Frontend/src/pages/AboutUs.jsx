import "../styles/AboutUs.css";

export default function AboutPage() {
  return (
    <section className="page-section">
        <div className="card">
          <header className="card-header">
            <h1 className="page-title">About Barangay 830</h1>
            <p className="lead">History, mission, and vision in one place</p>
          </header>

          <div className="card-body">
            <div>
              <h2 className="sub-title">History</h2>
              <p className="content-paragraph">
                Way back in the 1980s, almost all of the residents were active
                and retired soldiers and police officers, since the area was
                part of Malacañang. The leader at that time ordered that only
                families or relatives of soldiers and police were allowed to
                live there. But as time went on, other tenants who were not
                related to the soldiers or police also started living in the area.
              </p>

              <p className="content-paragraph">
                Their boundaries are: Estero de Pandacan on one side, Estero
                Heshus St. on the other, Pasig River to the north, and
                Sacaritas Heshus St., Pasig 1 to the south.
              </p>

              <p className="content-paragraph">
                Eventually, a condominium was built consisting of six buildings
                called Residencials de Manila. The population reached 5,736,
                with about 1,450 families.
              </p>

              <h2 className="sub-title">Mission</h2>
              <p className="content-paragraph">
                Good public service and good governance ensure that government
                actions are transparent, accountable, and focused on meeting
                the needs of the people, promoting fairness, efficiency, and
                sustainable development.
              </p>

              <h2 className="sub-title">Vision</h2>
              <p className="content-paragraph">
                To serve our constituents with full dedication and effort,
                ensuring readiness to help at all times. To remain committed
                to providing service 24/7 to meet their needs.
              </p>
            </div>

            <aside className="illustration">
              <div className="blob" aria-hidden="true"></div>
            </aside>
          </div>
        </div>
    </section>
  );
}
