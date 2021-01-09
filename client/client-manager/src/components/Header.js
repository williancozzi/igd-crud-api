import React from 'react'

export default function Header() {
    return (
        <div>
            <h1 style={styles.centerText}>Gerenciador de clientes - IGD</h1>
        </div>
    )
}

const styles = {
    centerText: {
        textAlign: "center",
    }
}