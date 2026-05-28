/* eslint-disable @next/next/no-img-element */
export default function Loader() {
  return (
    <div className="domea-loader-overlay" aria-hidden="true">
      <div className="domea-loader-content">
        <div className="domea-loader-logo">
          <img
            src="/domea-sans-fond.png"
            alt="DOMÉA"
            style={{ height: "180px", width: "auto" }}
          />
        </div>
        <div className="domea-loader-bar-track">
          <div className="domea-loader-bar-fill" />
        </div>
        <p className="domea-loader-subtitle">Services à domicile</p>
      </div>
    </div>
  );
}
