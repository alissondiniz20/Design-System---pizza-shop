import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TableRow, TableCell } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";

export function OrderTableRow() {
  return(
    <TableRow> 
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
        
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        weqr9we9r8we9r5w6598656
      </TableCell>
      <TableCell className="text-muted-foregound">
        há 15 minutos
      </TableCell>
      <TableCell>
        
      </TableCell>
      <TableCell className="font-medium">
        Alisson Barbosa Diniz
      </TableCell>
      <TableCell className="font-medium">
        R$ 149,90
      </TableCell>
      <TableCell>
        <Button variant="outline" size='xs'>
          <ArrowRight className="h-3 w-3 mr-2" />
          Aprocar                    
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size='xs'>
          <X className="h-3 w-3 mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}