import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MapComponent = ({ mentors }) => {
  const [map, setMap] = useState(null);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const mapInstance = L.map('map').setView([0, 0], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapInstance);

    setMap(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, []);

  useEffect(() => {
    if (map && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          map.setView([latitude, longitude], 13);

          L.marker([latitude, longitude]).addTo(map)
            .bindPopup('Your location')
            .openPopup();
        },
        error => {
          console.error('Error getting user location:', error);
        }
      );
    }
  }, [map]);

  useEffect(() => {
    if (map) {
      const markers = [];
      mentors.forEach(mentor => {
        const { latitude, longitude, name, description, skills, phone, image, cv } = mentor;
        const marker = L.marker([latitude, longitude]).addTo(map)
          .bindPopup(`<b>${name}</b>`);

        marker.on('click', () => {
          setSelectedMentor(mentor);
          setShowModal(true);
        });

        markers.push(marker);
      });

      return () => {
        markers.forEach(marker => map.removeLayer(marker));
      };
    }
  }, [map, mentors]);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
      
      {selectedMentor && (
        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Mentor Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-5">
                <img src={selectedMentor.image === 'img_empty.gif' ? 'https://dashboard.gurucoding.cartera.my.id/img/img_empty.gif' : `https://dashboard.gurucoding.cartera.my.id/mentor/img/${selectedMentor.image}`} alt={selectedMentor.name} className="img-fluid rounded-circle" />
                <h5 className="mt-3 text-center text-gray-900">{selectedMentor.name}</h5>
                <p className="text-center text-gray-700">
                  <a href={`https://www.google.com/maps?q=${selectedMentor.latitude},${selectedMentor.longitude}`} 
                    target="_blank" rel="noopener noreferrer" >Alamat Mentor
                  </a>
                </p>
              </div>
              <div className="col-md-7">
                <p>{selectedMentor.description}</p>
                <div><strong>Keterampilan:</strong> <p>{selectedMentor.skills}</p></div>
                <div><strong>Informasi Kontak:</strong> <p><a href={`https://wa.me/${selectedMentor.phone}`} target="_blank" rel="noopener noreferrer">{selectedMentor.phone}</a></p></div>
                <div><strong>CV:</strong> {selectedMentor.cv ? <p><a href={`https://dashboard.gurucoding.cartera.my.id/mentor/cv/${selectedMentor.cv}`} target="_blank" rel="noopener noreferrer">Preview CV</a></p> : <p>Tidak ada CV</p>}</div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

MapComponent.propTypes = {
  mentors: PropTypes.array.isRequired
};

export default MapComponent;
