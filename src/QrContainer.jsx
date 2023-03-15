import Card from "./Card";
import qrImage from "./assets/image-qr-code.png";

const QrContainer = () => {
  return (
    <div className="grow flex justify-center items-center">
      <Card className="text-center max-w-[400px] w-4/5">
        <img src={qrImage} alt="QR Code" className="rounded-3xl mb-7" />
        <div className="mx-7">
          <h1 className="text-dark-blue text-2xl md:text-3xl font-bold mb-5">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-greyish-blue text-xl md:text-2xl mb-4 md:mb-7">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </Card>
    </div>
  );
};

export default QrContainer;
