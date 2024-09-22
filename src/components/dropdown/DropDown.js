import "./dropdown.css";
export default function DropDown({
  className,
  data,
  selectValue,
  setSelectValue,
  multi,
}) {
  const handleAdd = (item) => {
    // if (selectValue.includes(item.name)) return;
    if (selectValue.some((selectedItem) => selectedItem.name === item.name))
      return;

    const newSelectValue = [...selectValue, item];
    const limitLength = data.length;

    if (newSelectValue.length > limitLength) {
      newSelectValue.shift();
    }
    setSelectValue(newSelectValue);
  };

  return (
    <div className={className}>
      <div style={{ width: "100%" }}>
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              multi ? handleAdd(item) : setSelectValue(item);
            }}
            style={{
              width: "100%",
              display: "flex",
              color: "white",
              fontSize: "20px",
              alignItems: "center",
              padding: "10px",
              borderBottom: "solid 1px #777",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: item.color ? item.color : null,
              }}
            ></div>
            <span
              style={{
                marginLeft: "25px",
                fontSize: "20px",
                color: "white",
              }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
