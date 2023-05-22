import Caption from '../components/Caption';

function copyToClipboard(token) {
  try {
    let res = document.execCommand('copy');
    let msg = res ? 'success' : 'failed';
    console.log('Copying ' + msg);
  } catch (err) {
    console.log('Error: Oops, unable to copy!');
  }
}

function WalletAddress(props) {
  const token = props.token;
  const address = props.children;

  const handleClick = e => {
    if (e.detail === 2) // double click
      return copyToClipboard(token);
  };

  return (
    <p className='address-container' onClick={handleClick}>
      <b>{token.toUpperCase()}</b>
      <button
        className='a address-text'
        id={token + '-address'}
        title="Copy"
      >
        {address}
      </button>
    </p>
  );
}

export default function Contacts() {
  return (
    <section id="contribute">
      <div className="panel-container">
        <div className="panel">
          <p>
            If you want to show your support you can buy me a
            Coke:
          </p>

          <WalletAddress token='pypl'>
            PayPal.me/cherrynoize
          </WalletAddress>

          <WalletAddress token='eth'>
            0x5938C4DA9002F1b3a54fC63aa9E4FB4892DC5aA8
          </WalletAddress>

          <WalletAddress token='sol'>
            G77bErQLYatQgMEXHYUqNCxFdUgKuBd8xsAuHjeqvavv
          </WalletAddress>

          <WalletAddress token='bnb'>
            0x0E0eAd7414cFF412f89BcD8a1a2043518fE58f82
          </WalletAddress>

          <WalletAddress token='lunc'>
            terra1n5sm6twsc26kjyxz7f6t53c9pdaz7eu6zlsdcy
          </WalletAddress>

          <h5>
            Thank you for using my stuff.
          </h5>
        </div>

        <Caption>
          Please feel free to contact me about any feedback or
          request. If you find a bug in an application on code snippet,
          first consider opening a public issue or pull request instead.
        </Caption>
      </div>
    </section>
  );
}
