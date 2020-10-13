import axios from 'axios'

export default axios.create({
    baseURL: 'https://127.0.0.1:8000/',
    headers: {
        "Content-type": "application/json",
        'Authorization': 'y5jfv1xlpf3jvp^xtx%92h_x@f96ctdc3oyr*icvl_bbvno57g',
    }
})