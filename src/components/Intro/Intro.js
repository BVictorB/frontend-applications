import './intro.css'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className="intro-container">
      <h1>Intro text</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat commodi officia officiis voluptate veniam libero quam excepturi deserunt accusantium iste, expedita odio, illum provident voluptatum quae distinctio maxime doloremque ut sapiente nam! Vitae qui sunt ipsum excepturi quibusdam quidem corporis voluptate repudiandae, ex dolorum reiciendis, dicta non rem commodi amet sapiente iste animi illum laborum porro cumque, libero quas praesentium omnis! In perspiciatis nobis ut, incidunt voluptatem hic beatae suscipit maiores harum ipsam non consequatur ducimus commodi saepe nulla atque consequuntur? Illo ullam iste dolorum! Sunt tenetur ex, cupiditate quos nisi obcaecati, repellat nulla explicabo, impedit aut nihil asperiores eum.</p>
      <Link to='/map'>
        <button className="intro-button">Go to map</button>
      </Link>
    </div>
  )
}

export default Intro