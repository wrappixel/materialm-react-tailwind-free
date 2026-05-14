import { Label } from "src/components/ui/label";
import { Input } from "src/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "src/components/ui/select";
import { Button } from "src/components/ui/button";


const BasicForm = () => {
  return (
    <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full wrap-break-word">
    <h5 className="card-title">Form</h5>
    <div className="mt-6">
      <div className="grid grid-cols-12 gap-30">
        <div className="lg:col-span-6 col-span-12">
          <div className="flex  flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name">Your Name</Label>
              </div>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                required
                className="form-control form-rounded-xl"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1">Your email</Label>
              </div>
              <Input
                id="email1"
                type="email"
                placeholder="name@materialm.com"
                required
                className="form-control form-rounded-xl"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1">Your password</Label>
              </div>
              <Input
                id="password1"
                type="password"
                required
                className="form-control form-rounded-xl"
              />
            </div>
          
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12">
          <div className="flex  flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="countries1">Country</Label>
              </div>
              <Select required>
                <SelectTrigger id="countries1" className="w-full">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                  <SelectItem value="France">France</SelectItem>
                  <SelectItem value="Germany">Germany</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="countries2">State</Label>
              </div>
              <Select required>
                <SelectTrigger id="countries2" className="w-full">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Delhi">Delhi</SelectItem>
                  <SelectItem value="Gujarat">Gujarat</SelectItem>
                  <SelectItem value="Mumbai">Mumbai</SelectItem>
                  <SelectItem value="Chennai">Chennai</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="countries3">City</Label>
              </div>
              <Select required>
                <SelectTrigger id="countries3" className="w-full">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Rajkot">Rajkot</SelectItem>
                  <SelectItem value="Ahemedabad">Ahemedabad</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex gap-3 mt-4">
          <Button variant="default" className="bg-primary text-white hover:bg-primary/90">Submit</Button>
          <Button variant="destructive">Cancel</Button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BasicForm