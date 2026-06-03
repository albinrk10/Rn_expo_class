import type { CSSProperties } from "react";
import type { Usuario } from "../types/Usuarios";

interface Props{
    user:Usuario;
}

export const UserCard = ({user}: Props)=> {
 
    const initials = user.nombre
    .trim()
    .split(/\s+/)
    .map((word) => word[0] ?? '')
    .join('')
    .slice(0,2)
    .toUpperCase();

    const statusStyle =user.activo ? styles.active : styles.inactive;

    return(
        <article style={styles.card}> 
            <div style={styles.avatar}>
                <span style={styles.avatarText}>{initials}</span>
            </div>

              <h2 style={styles.title} >{user.nombre}</h2>
              
              <p style={styles.text} >Rol: {user.rol}</p>

              <span style={{ ...styles.status, ...statusStyle}}>
                {user.activo ? 'Online' : 'Offline'}
              </span>

              <button type="button" style={styles.button}>
               <span style={styles.buttonText}>Ver Perfil</span>   
              </button>


           
        

    </article>
    )
  
};
const styles:Record<string,CSSProperties> = {
    card:{
        width:'100' , maxWidth:280,
        padding:24,
        backgroundColor:'#ffffff',
        borderRadius:12,
        border:'1px solid #d1d5db',
        display:'flex', flexDirection:'column',alignItems:'center',
        gap:8,
        boxSizing:'border-box'

    },
    avatar:{
        width:70, height:70,
        borderRadius:'50%',
        backgroundColor:'#1da1f2',
        display:'flex', alignItems:'center', justifyContent:'center',
        marginBottom:6,
    },
    avatarText:{color:'#ffffff',fontSize:26,fontWeight:700},
    title:{margin:0,fontSize:15,color:'#111827',textAlign:'center'},
    text:{margin:0,fontSize:15,color:'#111827',textAlign:'center'},
    status:{fontSize:14,padding:'4px 12px',borderRadius:999},
    active:{color:'#12ec65',backgroundColor:'#dcfce7'},
    inactive:{color:'#a40909',backgroundColor:'#dcfce7'},
    buton:{
        width:'100%',margin:12 ,backgroundColor:'#ec125b',border:'none',
        borderRadius:8,padding:'12px 0',
        cursor:'pointer'
    },
    buttonText:{
        color:'ffffff',
        fontSize:16,
        fontWeight:700
    }



}


