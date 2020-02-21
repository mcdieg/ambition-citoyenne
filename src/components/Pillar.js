import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { v4 } from 'uuid'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Pillar = ({ items }) => (
  <div className="columns is-multiline">
    {[
    {
      text: "Une ville conviviale et une démocratie locale au coeur de notre action",
      logo: '',
      img: '',
      link: ''
    },
    {
      text: "Une ville durable et l'écologie au coeur de notre action",
      logo: '',
      img: '',
      link: ''
    },
    {
      text: "Une ville juste et une vraie mixité au coeur de notre action",
      logo: '',
      img: '',
      link: ''
    },
    {
      text: "Un urbanisme maîtrisé et des équipements publics accessibles à tou(te)s",
      logo: '',
      img: '',
      link: ''
    },
    {
      text: "Un budget au profit des robinsonnais(e)s",
      logo: '',
      img: '',
      link: ''
    }
  ].map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              {/* <PreviewCompatibleImage imageInfo={item} /> */}
            </div>
            <h3 className="message-body">
              <b>{item.text}</b>
              <br />
            </h3>
          </div>
          <article key={v4()} className="message">
          </article>
          <div style={{ width: '100%' }}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography >Panneau 1</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </section>
      </div>
    ))}
  </div>
)

Pillar.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  )
}

export default Pillar
