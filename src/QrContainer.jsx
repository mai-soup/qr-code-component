import Card from "./Card";
import qrImage from "./assets/image-qr-code.png";

const QrContainer = () => {
  return (
    <div className="grow flex justify-center items-center">
      <Card className="text-center w-[610px]">
        <img src={qrImage} alt="QR Code" className="rounded-3xl mb-7" />
        <div className="mx-7">
          <h1 className="text-dark-blue text-5xl font-bold mb-5">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-greyish-blue text-3xl mb-7">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </Card>
    </div>
  );
};

export default QrContainer;
