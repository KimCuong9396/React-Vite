import "./style.css";

const MyComponent = () => {
  //const hoiCuong = "hello111";
  //const hoiCuong = 23;
  //const hoiCuong = true;
  //const hoiCuong = undefined;
  //const hoiCuong = null;
  const hoiCuong = [1, 2, 3];
  //const hoiCuong = { name: "cuongtieungu", age: 29 };
  return (
    <>
      <div>{console.log("KC")}</div>
      <div> {JSON.stringify(hoiCuong)} cuong tieu ngu</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        cuong tieu ngu oi
      </div>
    </>
  );
};
export default MyComponent;
