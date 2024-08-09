/* eslint-disable react/prop-types */

export const UserCard = ({ data }) => {
  return (
    <div className="preview-border" style={{ padding: '20px', borderRadius: '10px' }}>
      <p>{data.title}</p>
      <p>ID {data.id}</p>
    </div>
  );
};
