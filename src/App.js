import "./App.scss";
import liatImageWEBP from "./images/liat-image.webp";
import liatImageJPG from "./images/liat-image.jpg";

function App() {
  return (
    <div className="page-wrapper">
      <div className="row">
        <div className="col">
          <header className="main-header">
            <div className="info-wrapper">
              <h1>ליאת קלאורה</h1>
              <h2>שירותי פקידות וניהול אדמניסרטיבי</h2>
              <div className="info">
                <p><a href="mailto:liat@walla.com">liat@walla.com</a></p>
                <p>לוד</p>
              </div>
              <h3>פורטפוליו</h3>
            </div>
          </header>
          <main className="main-section">
            <div className="image-wrapper">
              <picture>
                <source srcSet={liatImageWEBP} type="image/webp" />
                <source srcSet={liatImageJPG} type="image/jpg" />
                <img src={liatImageJPG} alt="Liat Kalaora selfie" />
              </picture>
            </div>
            <section>
              <p>מה אני מציעה:</p>
              <ul>
                <li><p>שירותי אדמנסטרציה שוטפת וניהול משרד מרחוק</p></li>
                <li><p>מזכירות</p></li>
                <li><p>תיוק  מסמכים</p></li>
              </ul>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
