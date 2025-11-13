import './pg_destaque.css'

function Conjunto() {
    return (
        <>
            <div class="div-princ-dest">
                <section className="section-dest">
                    <img src="./Outfit/outfit-oldmoney.png" alt="" id='outfit_img' />
                    <div className="div-info-dest">
                        <ul className="ul-info-dest">
                            <li><img src="./Outfit/outfit-oldmoney-bone.png" alt="" id='img' /><h4>bone</h4></li>
                            <li><img src="./Outfit/outfit-oldmoney-blusa.png" alt="" id='img' /><h4>blusa</h4></li>
                        </ul>
                        <ul className="ul-info-dest">
                            <li><img src="./Outfit/outfit-oldmoney-calça.png" alt="" id='img-calça' /><h4>calça</h4></li>
                            <li><img src="./Outfit/outfit-oldmoney-tenis.png" alt="" id='img' /><h4>tenis</h4></li>
                        </ul>
                    </div>
                </section>
            </div>
        </>

    )
}

export default Conjunto;