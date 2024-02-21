import React, { useState } from "react";
import Navbar from "../../utils/navbar/navbar";
import ProfileImage from "../../assets/profilePhoto.svg";
import DeleteImage from "../../assets/deleteItem.svg";
import editButton from "../../assets/edit-button.png";
import "./profile.css";
import Footer from "../../utils/footer/footer";
import starImg from "../../assets/star.svg";
import starEmptyImg from "../../assets/starEmpty.svg";
export default function Profile() {
  const [name, setName] = useState("AryanJ");
  const [dob, setDob] = useState("2003-10-22");
  const [c, setC] = useState("ghaziabad");
  const [link, setLink] = useState("gjhj");
  const [age, setAge] = useState(calculateAge(dob));
  const [profilePhoto, setProfilePhoto] = useState(ProfileImage);
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState([
    {
      marked: "true",
      title: "Product 1",
      barCodeNumber: "123456789",
      status: "Active",
      date: "2024-02-20",
    },
    {
      marked: "false",
      title: "Product 2",
      barCodeNumber: "987654321",
      status: "Inactive",
      date: "2024-02-19",
    },
    {
      marked: "false",
      title: "Product 2",
      barCodeNumber: "987654321",
      status: "Inactive",
      date: "2024-02-19",
    },
    {
      marked: "false",
      title: "Product 2",
      barCodeNumber: "987654321",
      status: "Inactive",
      date: "2024-02-19",
    },
  ]);
  function handleAction(index) {
    const newData = [...data];
    newData.splice(index, 1); 
    setData(newData);
  }
  function handleDetail(index) {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }
  function handleMarked(index) {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      marked: newData[index].marked === "true" ? "false" : "true",
    };
    setData(newData);
  }
  function calculateAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setAge(calculateAge(dob));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="ScannerPage">
      <Navbar />
      <section className="profileContainer">
        <div className="profilePhotoContainer">
          <img
            src={profilePhoto}
            alt="Profile"
            className="profilePhoto"
            onClick={isEditing ? null : handleEditClick}
          />
          {isEditing && (
            <>
              <label htmlFor="fileInput">
                <img src={editButton} alt="Edit" className="editButton" />
              </label>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
                className="fileInput"
              />
            </>
          )}
        </div>
        <div className="profileInfo">
          <section className="name">
            <h1>
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  className="input"
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                name
              )}
              , <span>{age}</span>
            </h1>
            <sup className="status">Online</sup>
          </section>
          <section>
            <div>
              <h1>Date Of Birth</h1>
              {isEditing ? (
                <input
                  type="date"
                  value={dob}
                  className="input"
                  onChange={(e) => setDob(e.target.value)}
                />
              ) : (
                <h1>{dob}</h1>
              )}
            </div>
            <div>
              <h1>City</h1>
              {isEditing ? (
                <input
                  type="text"
                  value={c}
                  className="input"
                  onChange={(e) => setC(e.target.value)}
                />
              ) : (
                <h1>{c}</h1>
              )}
            </div>
            <div>
              <h1>Instagram</h1>
              {isEditing ? (
                <input
                  type="text"
                  value={link}
                  className="input"
                  onChange={(e) => setLink(e.target.value)}
                />
              ) : (
                <a href={link} className="instagram">
                  {name}
                </a>
              )}
            </div>
            {isEditing ? (
              <button onClick={handleSaveClick} className="profileButton">
                Save
              </button>
            ) : (
              <button onClick={handleEditClick} className="profileButton">
                Edit
              </button>
            )}
          </section>
        </div>
      </section>
      <section className="additionalInfo">
        <h1 className="itemHeading">Item List</h1>
        <table className="ItemList">
          <thead className="ItemHead">
            <tr>
              <th>
                <img src={starImg}></img>
              </th>
              <th>Title</th>
              <th>Bar Code Number</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="ItemRow">
                <td>
                  <button
                    onClick={() => handleMarked(index)}
                    className="ItemMarked"
                  >
                    {item.marked === "true" ? (
                      <img src={starImg} alt="Marked" />
                    ) : (
                      <img src={starEmptyImg} alt="Not Marked" />
                    )}
                  </button>
                </td>

                
                <td>{item.title}</td>
                <td>{item.barCodeNumber}</td>
                <td>
                  <span className="ItemStatus">{item.status}</span>
                </td>
                <td>{item.date}</td>
                <td>
                  <button
                    onClick={() => handleDetail(item)}
                    className="ItemDetail"
                  >
                    Detail
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleAction(item)}
                    className="ItemDelete"
                  >
                    <img src={DeleteImage}></img>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Footer></Footer>
    </div>
  );
}
