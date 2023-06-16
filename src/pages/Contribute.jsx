import Caption from '../components/Caption';

function copyToClipboard(txt) {
  navigator.clipboard.writeText(txt);
}

function Address(props) {
  const token = props.token;
  const address = props.children;
  const title = props.title;
  const copy = props.copy;

  const handleClick = e => {
    // click type and title prop
    if ((e.detail === 1) && copy)
      return copyToClipboard(address);
  };

  return (
    <p className='address-container'
      onClick={handleClick}
      title={title}
    >
      <b>{token.toUpperCase()}</b>
      <button
        className='a address-text'
        id={token + '-address'}
        copy={copy}
      >
        {address}
      </button>
    </p>
  );
}

export default function Contacts() {
  const copyTitle = "Copy";

  return (
    <section id="contribute">
      <div className="panel-container">
        <div>
          <p className="header">
            If you want to support me you can buy me a
            Coke on here:
          </p>
          <a target="_blank" rel="noreferrer" href="https://ko-fi.com/cherrynoize">
            <Address token='kofi'>
              Ko-fi.com/cherrynoize
            </Address>
          </a>
          <a target="_blank" rel="noreferrer" href="https://paypal.me/cherrynoize">
            <Address token='pypl'>
              PayPal.me/cherrynoize
            </Address>
          </a>
          <a target="_blank" rel="noreferrer" href="https://distrokid.com/vip/seven/4745076">
            <Address token='dstr'>
              Get 7% off of DistroKid referral
            </Address>
          </a>
          <Address token='eth' title={copyTitle} copy>
            0x5938C4DA9002F1b3a54fC63aa9E4FB4892DC5aA8
          </Address>
          <Address token='sol' title={copyTitle} copy>
            G77bErQLYatQgMEXHYUqNCxFdUgKuBd8xsAuHjeqvavv
          </Address>
          <Address token='bnb' title={copyTitle} copy>
            0x0E0eAd7414cFF412f89BcD8a1a2043518fE58f82
          </Address>
          <Address token='lunc' title={copyTitle} copy>
            terra1n5sm6twsc26kjyxz7f6t53c9pdaz7eu6zlsdcy
          </Address>
          <h5>
            Thank you for using my stuff.
          </h5>
        </div>

        <Caption>
          Feel free to contact me if you have any feedback or
          request. If you find a bug in a repo or app,
          please consider opening a public issue or pull request instead.
        </Caption>
      </div>
    </section>
  );
}
