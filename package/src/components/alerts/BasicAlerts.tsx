import { Alert, AlertDescription } from "src/components/ui/alert"


const BasicAlerts = () => {
  return (
    <>
          <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full wrap-break-word">
          <h5 className="card-title mb-4">Alert</h5>
          <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-6 col-span-12">
              <div className="flex flex-col gap-2">
              <Alert className="rounded-md bg-primary text-white border-none">
          <AlertDescription>
            <span className="font-medium">Primary</span> - A simple primary alert
          </AlertDescription>
        </Alert>

        <Alert className="rounded-md bg-secondary text-white border-none">
          <AlertDescription>
            <span className="font-medium">Secondary</span> A simple Secondary alert
          </AlertDescription>
        </Alert>

        <Alert className="rounded-md bg-success text-white border-none">
          <AlertDescription>
            <span className="font-medium">Success</span> A simple Success alert
          </AlertDescription>
        </Alert>

        <Alert className="rounded-md bg-info text-white border-none">
          <AlertDescription>
            <span className="font-medium">Info</span> A simple Info alert
          </AlertDescription>
        </Alert>

        <Alert className="rounded-md bg-warning text-white border-none">
          <AlertDescription>
            <span className="font-medium">Warning</span> A simple Warning alert
          </AlertDescription>
        </Alert>

        <Alert className="rounded-md bg-error text-white border-none">
          <AlertDescription>
            <span className="font-medium">Error</span> A simple Error alert
          </AlertDescription>
        </Alert>

        <Alert className="rounded-md bg-dark text-white border-none">
          <AlertDescription>
            <span className="font-medium">Dark</span> A simple Dark alert
          </AlertDescription>
        </Alert>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
                <div className="flex flex-col gap-2">
                <Alert className="rounded-md bg-lightprimary text-primary border-none">
          <AlertDescription>
            <span className="font-medium">Primary</span> - A simple primary alert
          </AlertDescription>
        </Alert>

        <Alert className="rounded-md bg-lightsecondary text-secondary border-none">
          <AlertDescription>
            <span className="font-medium">Secondary</span> A simple Secondary alert
          </AlertDescription>
        </Alert>

        <Alert className="rounded-md bg-lightsuccess text-success border-none">
          <AlertDescription>
            <span className="font-medium">Success</span> A simple Success alert
          </AlertDescription>
        </Alert>

        <Alert className="rounded-md bg-lightinfo text-info border-none">
          <AlertDescription>
            <span className="font-medium">Info</span> A simple Info alert
          </AlertDescription>
        </Alert>

        <Alert className="rounded-md bg-lightwarning text-warning border-none">
          <AlertDescription>
            <span className="font-medium">Warning</span> A simple Warning alert
          </AlertDescription>
        </Alert>

        <Alert className="rounded-md bg-lighterror text-error border-none">
          <AlertDescription>
            <span className="font-medium">Error</span> A simple Error alert
          </AlertDescription>
        </Alert>

        <Alert className="rounded-md bg-lightgray text-bodytext border-none">
          <AlertDescription>
            <span className="font-medium">Light</span> A simple Light alert
          </AlertDescription>
        </Alert>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default BasicAlerts