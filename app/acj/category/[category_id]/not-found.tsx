import Link from "next/link";

const NotFound = () => {
  return (
    <main
      className="text-center"
      style={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "28px",
        }}
      >
        Sorry, the page you requested could not be found
      </h1>

      <p style={{ fontSize: "20px" }}>
        please visit <Link href={"/users"}>Users page</Link>
      </p>
    </main>
  );
};
export default NotFound;
