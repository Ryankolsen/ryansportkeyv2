import "bootstrap/dist/css/bootstrap.min.css";

const FooterPage = () => {
  return (
    <div className="footer">
      <div color="blue" className="font-small text-center">
        <div className="footer-copyright text-center">
          &copy; {new Date().getFullYear()}
        </div>
        <div className="footer-copyright text-center">
          Contact: ryankolsen@gmail.com
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
