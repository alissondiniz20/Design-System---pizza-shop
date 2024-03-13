import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";

export function OrderTableRow() {
  return(
    <TableRow> 
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        weqr9we9r8we9r5w6598656
      </TableCell>
      <TableCell className="text-muted-foregound">
        há 15 minutos
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-md text-muted-foregrounds">
            Pendente
          </span>
        </div>
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