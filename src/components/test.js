const fileObject = {
  name: "main",
  folders: [],
  files: []
};

const folderObject = {
  name: folderName,
  folders: [],
  files: []
}

function newFolder() {
  location.folders.push({
    name: "New Folder",
    folders: [],
    files: []
  })
}

function newFile(fileName) {
  location.files.push({
    name: fileName
  })
}


  setPath(fileObj.folders[0].folders[0].files[0])
  
  navback = () => {
  
  }
  
  
  {fileObj.folders.map(({name}, i) => (
    <div key={i}>{name}</div>
  ))}
  
  {fileObj.files.map(({name}, i) => (
    <div key={i}>{name}</div>
  ))}





  import React, { useEffect, useState } from "react";
  import "./styles.css";
  
  const fileObject = {
    name: "main",
    folders: [
      {
        name: "movies",
        folders: [
          {
            name: "harry potter",
            folders: [],
            files: [{ name: "harrypotter.mkv" }]
          }
        ],
        files: []
      },
      {
        name: "pictures",
        folders: [],
        files: [{ name: "image.png" }]
      }
    ],
    files: [{ name: "picture.jpg" }, { name: "words.txt" }, { name: "movie.mp4" }]
  };
  
  export default function App() {
    const [location, setLocation] = useState(fileObject);
    const [history, setHistory] = useState([fileObject]);
  
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        {history.map((val, i) => (
          <div
            key={i}
            className="nav"
            onClick={() => {
              setLocation(val);
              setHistory([...history.slice(0, i + 1)]);
            }}
          >
            /{val.name}
          </div>
        ))}
  
        <div style={{ width: "150px" }}>
          {location.folders.map(({ name }, i) => (
            <div
              key={i}
              className="file"
              onClick={() => {
                setLocation(location.folders[i]);
                setHistory((history) => [...history, location.folders[i]]);
              }}
            >
              folder: {name}
            </div>
          ))}
          {location.files.map(({ name }, i) => (
            <div key={i} className="file">
              file: {name}
            </div>
          ))}
        </div>
      </div>
    );
  }




function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function nameSort() {
  setLocation(location.sort(dynamicSort("name")))
}



const fileObject = {
  name: "main",
  folders: [
    {
      name: "movies",
      mimeType: "File folder",
      folders: [
        {
          name: "harry potter",
          folders: [],
          files: [
            {
              name: "harrypotter.mp4",
              updatedAt: "today",
              mimeType: "mp4",
              size: "10MB",
            },
          ],
        },
      ],
      files: [],
    },
    {
      name: "pictures",
      mimeType: "File folder",
      folders: [],
      files: [
        {
          name: "image.jpg",
          updatedAt: "today",
          mimeType: "jpg",
          size: "10MB",
        },
      ],
    },
  ],
  files: [
    { name: "picture.jpg", updatedAt: "today", mimeType: "jpg", size: "10MB" },
    { name: "words.txt", updatedAt: "today", mimeType: "txt", size: "10MB" },
    { name: "movie.mp4", updatedAt: "today", mimeType: "mp4", size: "10MB" },
    { name: "movie2.mp4", updatedAt: "today", mimeType: "mp4", size: "10MB" },
    { name: "video.mkv", updatedAt: "today", mimeType: "mkv", size: "10MB" },
  ],
};




{location.folders.map(({ name, mimeType }, i) => (
  <Row
    key={i}
    className="test"
    onClick={() => {
      setLocation(location.folders[i]);
      setHistory((history) => [...history, location.folders[i]]);
    }}
  >
    <Col>
      <i className="bi bi-folder"></i> {name}
    </Col>
    <Col>{mimeType}</Col>
  </Row>
))}

{location.files.map(({ _id, name, path, mimeType, size, updatedAt }, i) => {


}}
      <Row
        key={i}
        className="test"
        onContextMenu={(e) => {
          e.preventDefault();
          props.setShowContextMenu(true);
          props.setSelectedFile({ _id, path, mimeType });
          props.setPoints({ x: e.pageX, y: e.pageY });
        }}
      >
        <Col className="text-truncate">
          <FileImage value={mimeType} /> {name}
        </Col>
        <Col>{updatedAt /*.substring(0, 10)*/}</Col>
        <Col>{mimeType}</Col>
        <Col className="text-end">{size} bytes</Col>
      </Row>
    )
  )
) : (
  <div>no files</div>
)}


{location.files.map(({ _id, name, path, mimeType, size, updatedAt }, i) => {
  if (mimeType == "File folder") {
    return <Row
    key={i}
    className="test"
    onClick={() => {
      setLocation(location.folders[i]);
      setHistory((history) => [...history, location.folders[i]]);
    }}
  >
    <Col>
      <i className="bi bi-folder"></i> {name}
    </Col>
    <Col>{mimeType}</Col>
  </Row>;
  }

  return <Row
  key={i}
  className="test"
  onContextMenu={(e) => {
    e.preventDefault();
    props.setShowContextMenu(true);
    props.setSelectedFile({ _id, path, mimeType });
    props.setPoints({ x: e.pageX, y: e.pageY });
  }}
>
  <Col className="text-truncate">
    <FileImage value={mimeType} /> {name}
  </Col>
  <Col>{updatedAt /*.substring(0, 10)*/}</Col>
  <Col>{mimeType}</Col>
  <Col className="text-end">{size} bytes</Col>
</Row>;
})}


function deleteFile(name, location) {
  tempObject = location;
  tempObject.files.forEach(file => {
    if(file.name == name) {
      delete tempObject.files.file
    }
  })
  return tempObject
}

function newFolder(location) {
  location.folders.push({
    name: "New Folder",
    folders: [],
    files: [],
  });
  postapi ()
}


const fileList = [{
  name: "movie.mp4",
  type: "file",
  parent: "folder"
},
{
  name: "movies",
  type: "folder",
  parent: "none"
}]

const [currentDirectory, setCurrentDirectory] = useState("main")

{fileList.map(({ name, parent, type }, i) => {
  if(parent == currentDirectory) {
    if(type == "folder") {
      <div onClick={setCurrentDirectory(name)}>{name}</div>
    }
    <div>{name}</div>
  }

})}


import { useState } from "react";
import "./styles.css";

const fileList = [
  {
    name: "movie1.mp4",
    type: "file",
    directory: "movies"
  },
  {
    name: "movies",
    type: "folder",
    directory: "main"
  },
  {
    name: "movie2.mp4",
    type: "file",
    directory: "movies"
  },
  {
    name: "movie3.mp4",
    type: "file",
    directory: "movies"
  },
  {
    name: "image.png",
    type: "file",
    directory: "main"
  },
  {
    name: "image.png",
    type: "file",
    directory: "main"
  },
  {
    name: "folder1",
    type: "folder",
    directory: "movies"
  },
  {
    name: "folder2",
    type: "folder",
    directory: "folder1"
  },
  {
    name: "nested file",
    type: "file",
    directory: "folder2"
  }
];

export default function App() {
  const [history, setHistory] = useState(["main"]);
  const [currentDirectory, setCurrentDirectory] = useState("main");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {history.map((backLink, i) => (
        <div
          key={i}
          className="nav"
          onClick={() => {
            setCurrentDirectory(backLink);
            setHistory([...history.slice(0, i + 1)]);
          }}
        >
          /{backLink}
        </div>
      ))}

      <div style={{ width: "150px" }}>
        {fileList.map(({ name, directory, type }, i) => {
          if (directory === currentDirectory) {
            if (type === "folder") {
              return (
                <div
                  key={i}
                  className="file"
                  onClick={() => {
                    setCurrentDirectory(name);
                    setHistory([...history, name]);
                  }}
                >
                  folder: {name}
                </div>
              );
            }
            return (
              <div key={i} className="file">
                file: {name}
              </div>
            );
          }
          //return <div className="file">{name}</div>;
        })}
      </div>
    </div>
  );
}
