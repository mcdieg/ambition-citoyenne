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
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Pillar = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
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
                <Typography >
                  <div className="has-text-centered">
                    <h3>
                      {item.title}
                    </h3>
                    <PreviewCompatibleImage imageInfo={item} />
                  </div>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                {/* <Typography> */}
                  <div className="has-text-centered">
                    <div
                      style={{
                        width: '240px',
                        display: 'inline-block',
                      }}
                    >
                    </div>
                    {/* <article key={v4()} className="message"> */}
                      {/* <div content={item.text}>
                        <br />
                      </div> */}
                      <ReactMarkdown source={item.text} />
                    {/* </article> */}
                    {/* <PreviewCompatibleImage imageInfo={item} /> */}
                    {/* <Img fluid={item.image2.childImageSharp.fluid} />
                    {console.log(item.image2)} */}
                  </div>
                {/* </Typography> */}
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
      title: PropTypes.string,
      image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    })
  )
}

export default Pillar
