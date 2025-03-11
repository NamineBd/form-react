import React from 'react';
import './App.css'; // Utilisez le même style CSS

function Poemes() {
  const poemes = [
    {
      titre: "Sonnet 18",
      contenu: `Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date.`,
    },
    {
      titre: "Sonnet 116",
      contenu: `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.`,
    },
    {
      titre: "Sonnet 130",
      contenu: `My mistress' eyes are nothing like the sun;
Coral is far more red than her lips' red;
If snow be white, why then her breasts are dun;
If hairs be wires, black wires grow on her head.`,
    },
    {
      titre: "Sonnet 29",
      contenu: `When, in disgrace with fortune and men's eyes,
I all alone beweep my outcast state,
And trouble deaf heaven with my bootless cries,
And look upon myself and curse my fate.`,
    },
  ];

  return (
    <div className="App">
      <h2>Poèmes de Shakespeare</h2>
      <div className="poemes-container">
        {poemes.map((poeme, index) => (
          <div key={index} className="poeme">
            <h3>{poeme.titre}</h3>
            <pre>{poeme.contenu}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Poemes;