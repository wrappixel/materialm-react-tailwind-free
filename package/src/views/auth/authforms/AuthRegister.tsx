import { Button } from "src/components/ui/button";
import { Label } from "src/components/ui/label";
import { Input } from "src/components/ui/input";
import { useNavigate } from "react-router";


const AuthRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
     navigate("/");
  }
  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="name">Name</Label>
          </div>
          <Input
            id="name"
            type="text"
            required
            className="form-control form-rounded-xl"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="emadd">Email Address</Label>
          </div>
          <Input
            id="emadd"
            type="email"
            required
            className="form-control form-rounded-xl"
          />
        </div>
        <div className="mb-6">
          <div className="mb-2 block">
            <Label htmlFor="userpwd">Password</Label>
          </div>
          <Input
            id="userpwd"
            type="password"
            required
            className="form-control form-rounded-xl"
          />
        </div> 
        <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">Sign Up</Button> 
        
      </form>
    </>
  )
}

export default AuthRegister
