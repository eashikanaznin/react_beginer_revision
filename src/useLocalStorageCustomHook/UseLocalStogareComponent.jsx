import { useLocalStorage } from "./useLocalStorage";

export default function UseLocalStorageComponent() {
  const [customId, setCustomId] = useLocalStorage("0", "");
  const [firstName, setFirstName] = useLocalStorage("FIRST_NAME", "");

  const [lastName, setLastName] = useLocalStorage("LAST_NAME", () => {
    return "Default";
  });

  const [hobbies, setHobbies] = useLocalStorage("HOBBIES", [
    "Programming",
    "walking",
  ]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <label>My Custom ID</label>
        <input
          type="text"
          value={customId}
          onChange={(e) => setCustomId(e.target.value)}
        />

        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>{hobbies.join(", ")}</div>
      <button
        onClick={() =>
          setHobbies((currentHobbies) => [...currentHobbies, "New Hobby"])
        }
      >
        Add Hobby
      </button>
    </>
  );
}
