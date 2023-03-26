import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MaterialTable from "material-table";

function CharacterDetailsPage(props) {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

  useEffect(() => {
    console.log(id)
    fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <MaterialTable
      title="Character"
      columns={[
        { title: "Image", field: "imageUrl", render: rowData => <img src={rowData.imageUrl} alt={rowData.fullName} style={{ width: 100 }} /> },
        { title: "ID", field: "id" },
        { title: "Full Name", field: "fullName" },
        { title: "Title", field: "title" },
        { title: "Family", field: "family" },
      ]}
      data={[character]}
      options={{
        search: false,
        paging: false,
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF"
        }
      }}
    />
  );
  
}

export default CharacterDetailsPage;
