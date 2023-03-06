
import { useRef } from 'react';
import { MapContainer, TileLayer,Popup } from 'react-leaflet'
import House from './../components/House';
import useCarts from './../hooks/useCarts';


export default function Home(){
    const position = [51.505, -0.09]
    const mapRef = useRef()
    const [loading,carts] = useCarts()

    return(
        
        <>
            <div className="home-header">
                <h3>
                    Visualiser de belles Appartements 
                </h3>
            </div>
            <div className="home-container ">
                <div className="home-list">
                    { loading ? (  <p> Loading ... </p>):(
                        carts && carts.map((cart) => {
                            return cart?.products.map((product,index) => {
                                return  <House key={index} product={product} />
                            })
                        }) )
                    }
                </div>
                <div className="home-map"> 
                    <MapContainer 
                        ref={mapRef}
                        center={[51.505, -0.09]} 
                        zoom={13} 
                        scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {/* <Marker position={position}> */}
                            <Popup position={position}>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        {/* </Marker> */}
                    </MapContainer>
                 </div>
            </div>
        </>
    )
}