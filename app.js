function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({
          id: 1,
          name: "Aaliyan",
          age: 25,
          job: "Developer",
        });
      } else {
        reject("Failed to fetch data");
      }
    }, 2000);
  });
}

document.getElementById("fetchDataBtn").addEventListener("click", () => {
  const dataDisplay = document.getElementById("dataDisplay");
  dataDisplay.innerHTML = `<p> Loading... </p>`;

  fetchData().then((data) => {
    dataDisplay.innerHTML = `
    <h3> Data Fetched </h3>
    <p><strong> ${data.id} </strong></p>
    <p><strong> ${data.name} </strong></p>
    <p><strong> ${data.age} </strong></p>
    <p><strong> ${data.job} </strong></p>
    `;
  })
.catch((error) => {
    dataDisplay.innerHTML = `<p> ${error} </p>`;
  });
}

)


