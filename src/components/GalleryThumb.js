import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './GalleryThumb.css'
import ResponsiveImage from './ResponsiveImage'

function GalleryThumb ({ gallery }) {
  return (
    <div styleName="c-galleryThumb">
      <figure styleName="c-galleryThumb__figure" data-filter={ gallery.fields.tags }>
        <Link to={`/gallery/${gallery.sys.id}`} styleName="c-galleryThumb__imageContainer">
          <ResponsiveImage src={ gallery.fields.coverImage.fields.file.url } alt={ `Open Gallery ${gallery.fields.title}` }/>
        </Link>
      </figure>
    </div>
  )
}

GalleryThumb.propTypes = { gallery: PropTypes.object }

export default CSSModules(GalleryThumb, styles)
