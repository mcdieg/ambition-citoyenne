import React from 'react'
import Layout from '../../components/Layout'
import underconstruction from '../../img/underconstruct.png'

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
        <img src={underconstruction} alt="collectif citoyen" style={{ width: '350px', height: '350px' }} />
          <p>Un programme est en cours de construction avec le collectif de citoyens constitué suite à notre réunion du 1er février 2020.
          En attendant nous vous rappelons quelques tribunes éditées mensuellement dans le journal de Robinson et qui sont rédigées par nos 4 élus : Jean-François Papot, Béatrice Maubras, Christophe Leroy et Catherine Faguette.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)
