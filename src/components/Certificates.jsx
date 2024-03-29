import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Certificates = ({ certificates }) => {
  return (
    <>
      <Row
        className='mb-5 align-items-center pb-3 project'
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
          <span
            className='ms-3'
            style={{ fontSize: '1.4em', fontWeight: 'bold' }}
          >
            Certificates
          </span>
        </div>
        <Col className='mb-3'>
          <p>
            Here, you can see the list of the courses that I completed. The
            certificates can be verified by clicking on them.
          </p>
        </Col>
        <Row>
          <Col>
            {certificates.map((certificate) => {
              return (
                <Row className='mb-4' style={{ width: 'fit-content' }}>
                  <Link to={certificate.url} target='_blank'>
                    <span className='certificate'>{certificate.title}</span>
                  </Link>
                </Row>
              );
            })}
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Certificates;
