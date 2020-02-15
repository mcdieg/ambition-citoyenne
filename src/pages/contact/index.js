import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Nous contacter</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Votre nom
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Votre adresse email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Envoyer
                  </button>
                </div>
              </form>
              <div className="content">
                <h1>Nous soutenir</h1>
                <div>
                  <p>
                    <b>
                      Vous souhaitez nous soutenir en participant aux dépenses de campagne, nous vous invitons à prendre connaissance au préalable de notre note au donateur pour conformité au cadre légal pour les dons.
                    </b>
                  </p>
                  <p>
                    Vous pouvez adresser vos dons par chèque, à l’ordre de « Lucile Guérin, mandataire de Christophe Leroy », à l’adresse suivante : 
                  </p>
                  <p>
                    <b>
                    Lucile Guérin, 8 avenue des Quatre Fusillés, 92290 Châtenay-Malabry
                    </b>
                  </p>
                  <p>
                    En retour de votre don, un reçu à votre nom sera établi par la mandataire et vous sera renvoyé à l’adresse indiquée sur le chèque. 
                  </p>
                  <p>
                    Chaque don pourra faire une réduction d’impôt sur le revenu égal à 66 % du montant du don dans la limite de 20 % du revenu imposable 
                  </p>
                  <i>
                    Exemple : en donnant 100 euros, vous pourriez déduire 66 euros de vos impôts. Celle ne vous coûterait donc réellement que 34 euros
                  </i>
                  <p>
                    Nous vous rappelons toutefois, que la réduction d’impôt est conditionnée par le respect d’un plafond établi par le code général des impôts :   les dons et cotisations de personnes physiques sont plafonnés à 7 500 euros par donateur par an et pour l’ensemble des partis politiques.  
                  </p>
                  <p>
                    Pour chaque don, vos données personnelles feront l’objet d’une traitement de données personnelles dans un cadre légitime conformément à la loi Informatique et Libertés (et au Règlement Général sur la Protection des Données RGPD). Pour toute information et pour exercice de vos droits à cet égard , nous vous invitons à lire la note au donateur pour conformité au traitement des données personnelles.
                  </p>
                  <u>
                    Note au donateur pour conformité légale pour les dons :  
                  </u>
                  <div>
                    <p>
                      Conformément au code électoral article L52-8 et aux articles 11-4 et 11-5 de la loi du 11 mars 1988, relative à la transparence financière de la vie politique
                    </p>
                  </div>
                  <div>
                    <ul>
                      <li>
                        Le candidat ne peut recueillir de dons que par l’intermédiaire de son mandataire financier. 
                      </li>
                      <li>
                      Les dons consentis par une personne physique dûment identifiée pour le financement de la campagne d’un ou plusieurs candidats lors des mêmes élections ne peuvent excéder 4 600 euros.
                      </li>
                      <li>
                      Les dons et cotisations de personnes physiques sont plafonnés à 7500 euros par donateur par an et pour l’ensemble des partis politiques. 
                      </li>
                      <li>
                      Les personnes morales, à l'exception des partis ou groupements politiques, ne peuvent participer au financement de la campagne électorale d'un candidat, ni en lui consentant des dons sous quelque forme que ce soit, ni en lui fournissant des biens, services ou autres avantages directs ou indirects à des prix inférieurs à ceux qui sont habituellement pratiqués. 
                      </li>
                      <li>
                      Aucune association de financement ou aucun mandataire financier d'un parti ou groupement politique ne peut recevoir, directement ou indirectement, des contributions ou aides matérielles d'un État étranger ou d'une personne morale de droit étranger. Ils ne peuvent recevoir des prêts d'un État étranger ou d'une personne morale de droit étranger, à l'exception des établissements de crédit ou sociétés de financement mentionnés au troisième alinéa.
                      </li>
                      <li>
                      Les personnes qui ont versé un don ou consenti un prêt à un ou plusieurs partis ou groupements politiques en violation des articles 11-3-1 et 11-4, sont punies de trois ans d'emprisonnement et de 45 000 € d'amende. 
                      </li>
                      <li>
                      Tout don de plus de 150 euros consenti à un candidat en vue de sa campagne doit être versé par chèque, virement, prélèvement automatique ou carte bancaire.
                      </li>
                    </ul>
                  </div>
                  <u>
                    Note au donateur pour le traitement de leurs données personnelles : 
                  </u>
                  <p>
                    Conformément à la loi Informatique et Liberté et au RGPD, nous vous informons que des données personnelles suite à un don feront l’objet d’un traitement par le mandataire dans le cadre d’un intérêt légitime comme décrit ci-dessous : 
                  </p>
                  <p>
                    En effet conformément au décret n°90-606 du 9 juillet 1990 pris pour l'application de la loi n° 90-55 du 15 janvier 1990 relative à la limitation des dépenses électorales et à la clarification du financement des activités politiques
                  </p>
                  <ul>
                    <li>
                      Pour tout don, le mandataire a obligation légale d’inscrire, non seulement sur le reçu qui vous est renvoyé, mais aussi sur la souche du carnet des dons l'identité, la nationalité et l'adresse du domicile fiscal du donateur ou du cotisant. La souche comme le reçu indiquent également s'il s'agit d'un don ou d'une cotisation et mentionnent le montant, la date et le mode de règlement par chèque, espèces, carte bancaire, virement ou prélèvement automatique. 
                    </li>
                    </li>
                    <li>
                      Lorsqu’une même personne physique effectue plusieurs versements à un mandataire, celui-ci peut émettre un seul reçu par type (don ou cotisation) et mode de versement (espèces, chèque, virement). Les justificatifs de recettes fournis doivent permettre de faire le lien entre le reçu émis et les différents versements (en cas de versements multiples, il convient de porter sur le reçu et la souche la date du dernier versement) 
                    </li>
                    <li>
                      Le mandataire a obligation de conserver ces souches avec vos données personnelles pour les envoyer ensuite à Commission nationale des comptes de campagne et des financements politiques (CNCCFP), au plus tard le 15 mars de l'année suivant l'exercice concernés, accompagnées d'une copie des justificatifs de recettes correspondants.
                    </li>
                    <li>
                      La souche et autres fichiers de justificatifs de recettes (bordereaux de remise de chèque …) seront conservés par la commission nationale des comptes de campagne et financements politiques (CNCCFP) conformément à l’article 12 du décret, soit jusqu'au 31 décembre de la troisième année qui suit celle au cours de laquelle elle les a reçues, puis ensuite détruits.
                    </li>
                    <li>
                      L’ensemble de ces données traitées sur support papier ou électronique n’auront pas d’autre usage que la validation des reçus délivrés.
                    </li>
                    <li>
                      La délivrance des formules de reçus est subordonnée au respect de ces obligations.
                    </li>
                  </ul>
                  <p>
                    En résumé, pour des raisons légales, le mandataire conservera une souche des dons et tout autre document électronique ou papier de justificatif de dons (bordereaux de remise de chèque …) de façon sécurisée car elles sont confidentielles. Elles ne sont partagées avec aucune autre organisation autre que la CNCCFP et seront détruites après la validation du compte de campagne par la CNCCFP. 
                  </p>
                  <p>
                    Conformément à la Loi Informatique et Liberté et au RGDP, vous disposez d’un droit d’opposition et d’un droit à la limitation du traitement de données vous concernant, ainsi que d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données Vous pouvez exercer vos droits en adressant votre demande accompagnée d’une copie de votre pièce d’identité à l’adresse postale du Mandataire financier : Lucile Guérin, 8 avenue des Quatre Fusillés, 92290 Châtenay-Malabry.
                  </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}