import './Formm.css'

const Formm = () => {
    return (
        <div class="container">
            <form>
                <label for="fname">First Name
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                </label>
                <label for="lname">Last Name
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                </label>
                <label for="country">Destination visited
                    <select id="country" name="country">
                        <option value="australia">Pune</option>
                        <option value="canada">Mumbai</option>
                        <option value="usa">Banglore</option>
                    </select>
                </label>
                <label for="Hotelname">Place Visited
                    <input type="text" id="Hotelname" name="Hotelname" placeholder="Place Visited name.." />
                </label>
                <label for="rating">Rating
                    <select id="rating" name="rating">
                        <option value="5">5 star</option>
                        <option value="4">4 star</option>
                        <option value="3">3 star</option>
                        <option value="2">2 star</option>
                        <option value="1">1 star</option>

                    </select>
                </label>
            </ form>
        </div>
    )
}

export default Formm