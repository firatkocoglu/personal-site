import { Row, Col } from 'react-bootstrap';

const Skills = ({ skills, languages }) => {
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
            Skills
          </span>
        </div>
        <div>
          <p>
            These are the tools that I use when I build a full-stack web
            application. My main tools are Node.js with Typescript. I&apos;m
            confident with PHP development. Additionally, I feel comfortable
            working across the full stack when needed.
          </p>
        </div>
        {skills.map((skill) => {
          return (
            <Col xs={6} lg={2} className='mb-4'>
              <span className='skill'>{skill}</span>
            </Col>
          );
        })}
        <Row>
          <Col className='mb-2'>
            I am also confident with speaking these languages:
          </Col>
        </Row>
        <Row className='languages'>
          <Col>
            <ul>
              {languages.map((language) => {
                return (
                  <li key={language.id}>
                    <span>{language.lang} - </span>
                    <span>{language.level}</span>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Skills;
