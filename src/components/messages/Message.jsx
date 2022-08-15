const Message = ({ message, idx }) => {
  const formatData = (data) => {
    let hora = data.slice(11, 16) + "hs";

    let dia = data.slice(0, 10);
    return `Fecha: ${dia} / Hora: ${hora}`;
  };

  return (
    <tr>
      <th scope="row">{idx + 1}</th>
      <td>{message.number}</td>
      <td>{message.message}</td>
      <td>{formatData(message.createdAt)}</td>
    </tr>
  );
};
export default Message;
