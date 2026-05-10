

export function Button({ onClick=() => {}, 
                         children="", 
                         variant="primary",
                         size="md",
                         icon:Icon=undefined}) {

  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary"
  } 
  const sizes = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg"
  }

  console.log(Icon);
  return <button className={`${variants[variant]} ${sizes[size]}`} 
                 onClick={onClick}>
                 {Icon && <Icon size={18} className="icon-btn" />}
                 {children}
          </button>
}
