/* eslint-disable react/prop-types */

export const ConfirmCard = ({ data }) => {
  return (
    <div
      className="preview-border"
      style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'yellow' }}
    >
      <p>{data.title}</p>
    </div>
  );
};
