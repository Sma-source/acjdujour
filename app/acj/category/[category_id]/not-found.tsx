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
          fontSize: "28px",
        }}
      >
        Désolé, la page que vous recherchez n'éxiste pas
      </h1>

      <p>
        retournez à la{" "}
        <Link className="underline font-bold" href={"/"}>
          page d'accueil
        </Link>
      </p>
    </main>
  );
};
export default NotFound;
