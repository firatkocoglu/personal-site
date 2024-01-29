import { Link } from 'react-router-dom';
import { Row, Col, Image, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const [showImage, setShowImage] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const navigate = useNavigate();

  const showImageHandler = (e) => {
    setModalImage(e.target.src);
    setShowImage(true);
  };

  const hideImageHandler = () => {
    setShowImage(false);
  };

  return (
    <>
      <Row
        className='mb-5 align-items-center pb-3 project'
        key={project.id}
        onClick={() => navigate(`/projects/${project.id}`)}
        style={{
          border: '10px solid rgba(228, 222, 222)',
          borderRadius: '10px',
          boxShadow: '10px 5px',
          backgroundColor: 'white',
        }}
      >
        <div
          className='button-container d-flex align-items-center gap-2 p-3 mb-3'
          style={{
            backgroundColor: 'rgba(228, 222, 222)',
          }}
        >
          <div
            style={{
              border: '1px solid #FF605C',
              borderRadius: '50%',
              width: '15px',
              height: '15px',
              backgroundColor: '#FF605C',
            }}
          ></div>
          <div
            style={{
              border: '1px solid #FFBD44',
              borderRadius: '50%',
              width: '15px',
              height: '15px',
              backgroundColor: '#FFBD44',
            }}
          ></div>
          <div
            style={{
              border: '1px solid #00CA4E',
              borderRadius: '50%',
              width: '15px',
              height: '15px',
              backgroundColor: '#00CA4E',
            }}
          ></div>
          <div>
            <span
              className='ms-3'
              style={{ fontSize: '1.4em', fontWeight: 'bold' }}
            >
              {project.title}
            </span>
          </div>
        </div>
        <Col xl={6} key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <Button variant='outline-dark' className='me-3'>
            <Link to={`/projects/${project.id}`} style={{ color: 'black' }}>
              See Details
            </Link>
          </Button>
          <Button variant='outline-dark'>
            <Link style={{ color: 'black' }} to={project.url} target='__blank'>
              Visit Project
            </Link>
          </Button>
        </Col>
        <Col lg={6} className='d-flex justify-content-end'>
          <Image
            src={project.cover_image}
            alt={project.title}
            className='project-image'
            fluid
            thumbnail
            style={{ width: '500px', height: '250px' }}
            onClick={showImageHandler}
          />
        </Col>
      </Row>
      <Modal show={showImage} onHide={hideImageHandler} size='xl' centered>
        <Modal.Header closeButton>
          <span style={{ color: 'black' }}>{project.title}</span>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={modalImage}
            alt=''
            style={{ width: '100%', height: 'auto' }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectCard;
