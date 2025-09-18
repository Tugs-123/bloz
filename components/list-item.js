import Card from 'react-bootstrap/Card';

export default function ListItem() {
  return (
    <Card className={`fj-card fj-card-list`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src="/file.svg"
            className="rounded-circle mr-4"
            height={50}
            width={50}
            alt="avatar"
          />
          <div>
            <Card.Title className="fw-bold mb-1">Төгсөө Чинзориг</Card.Title>
            <Card.Subtitle className="card-date">2024-06-20</Card.Subtitle>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="card-main-title">JAMstack архитектур гэж юу вэ?</Card.Title>
          <Card.Text className="card-text">Static маягийн сайт</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}
