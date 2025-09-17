
import Card from 'react-bootstrap/Card';
 
export  default () => (
  <Card className={`fj-card  fj-card-list`}>
              <div className="card-body-wrapper">
                <Card.Header className="d-flex flex-row">
                  <img
                    src="https://source.unsplash.com/random/150x150?face"
                    className="rounded-circle mr-4"
                    height="50px"
                    width="50px"
                    alt="avatar"/>
                    
                    <div>
                      <Card.Title className="fw-bold mb-1">
                        Төгсөө Чинзориг
                      </Card.Title>
                      <Card.Subtitle className="card-date">
                        2024-06-20
                      </Card.Subtitle>
                    </div>
                </Card.Header>  
                <Card.Body>
                  <Card.Title className="card-main-title">
                    JAMstack архитектур гэж юу вэ?
                  </Card.Title>  
                  <Card.Text className="card-text"> Static маягийн сайт </Card.Text>
                </Card.Body>
              </div>
            </Card>
);