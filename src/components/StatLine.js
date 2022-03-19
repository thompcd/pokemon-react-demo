function StatLine(props) {
    return (
        <div className="stat-line">
            {padStats(props.name, props.value, ".", 20)}
            {/* <span>{props.name}</span>
      {".".repeat(20 - props.name.length)}
      <span>{props.value}</span> */}
        </div>
    );
}

function padStats(stat, val, sep, len) {
    console.log(stat)
    console.log(val)
    val = val || "xx";
    let output = `
    ${stat.toString()}${sep.repeat(len - (val.toString().length + stat.toString().length))}${val.toString()}`;
    return output;
}

export default StatLine;