import moment from "moment-timezone";

const Message = ({ message, idx, page }) => {
  var dateFormat = "DD-MM-YYYY HH:mm:ss";
  var testDateUtc = moment.utc(message.createdAt);
  var localDate = testDateUtc.local();
  //console.log(localDate.format(dateFormat)); //
  
  return (
    <tr>
      <th scope="row">{(idx +1 ) + (page * 10) - 10 }</th>
      <td>{message.number}</td>
      <td>{message.message}</td>
      <td>{localDate.format(dateFormat)}</td>
    </tr>
  );
};
export default Message;
