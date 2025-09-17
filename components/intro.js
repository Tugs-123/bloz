import Image from "next/image";

    export default () => (

        <div className="d-flex admin-intro align-items-start mb-4">
                        <Image
                            src="https://i.pravatar.cc/150"
                            alt="Generic placeholder"
                            width="64px"
                            height="64px"
                            className="rounded-circle me-3"
                            />
                    <div className="flex-grow-1 ms-3">  
                        <h5 className=" fw-bold mb-0">
                                1234.mn - Онлайн сургалт
                        </h5>
                        <p className="welcome-text">
                                Бид программчлал технологийн чиглэлээр төрөл бүрийн 
                                сонирхолтой мэдээллүүдийг энэхүү блогоор хүргэж байна.
                        </p> 
                    </div>            
        </div>
    );