import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from 'react';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{
            textDecoration: match ? "underline" : "none",
            color: "#fff",fontWeight:'700', marginLeft:'10px'
          }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {/*  {match && " (active)"}  */}
      </div>
    );
  }

export default CustomLink;